#ifdef GL_ES
precision mediump float;
#endif

// color mode conversions
vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float map (float val, float l1, float h1, float l2, float h2) {
    return l2 + (h2 - l2) * ((val - l1) / (l2 - l1));
}


// uniforms
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_fadein;
uniform bool reverse;

// varying
varying vec2 vTexCoord;

// colors
vec3 c1;
vec3 c2;
vec4 c3;
vec4 c4;
// other variables
float ratio;


// main shader code
void main() {
    c1 = hsv2rgb(vec3(32.0/360.0, 0.85, 1.0));
    c2 = hsv2rgb(vec3(155.0/360.0, 0.41, 1.0));

    c3 = vec4(hsv2rgb(vec3(29.0/360.0, 0.43, 1.0)), 0.3);
    c4 = vec4(hsv2rgb(vec3(0.0, 0.77, 0.5)), 0.05);
    ratio = float(u_resolution.x) / float(u_resolution.y);

    // map to [0, 1]
    vec2 st = vTexCoord / 2.0 + 0.5;
    // stretch to aspect ratio
    st.x *= ratio;
    vec4 outColor = vec4(0.0, 0.0, 0.0, 0.0);
    int h = 0;

    // halo #1
    float halo1 = 1.0 - clamp(distance(vec2(0.0, 0.0), st) * 2.0, 0.0, 1.0);
    outColor += vec4(c1*pow(halo1, 2.0), halo1/map(cos(u_time/2.0), -1.0, 1.0, 1.0, 4.0));
    // halo #2
    float halo2 = 1.0 - clamp(distance(vec2(ratio, sin(u_time) / 2.0 + 0.5), st) * 1.5, 0.0, 1.0);
    outColor += vec4(c2*pow(halo2, 2.0), halo2/map(cos(u_time), -1.0, 1.0, 0.9, 2.0));
    // global gradient
    float lingrad = (st.x + (1.0 - st.y)) / (1.0 + ratio);
    outColor += mix(vec4(c3.rgb*c3.a, c3.a*2.0), vec4(c4.rgb*c3.a, c4.a*2.0), lingrad); // more like leningrad haha am i right fellas

    // pixelated veil
    float size = 40.0;
    vec2 pq;
    vec2 cr = vec2(floor(u_resolution.x / size), floor(u_resolution.y / size));
    vec2 wh = vec2(ratio, 1.0) / cr;
    pq = wh * floor(st / wh);
    pq.x /= ratio;

    // crossing lines
    float dir = mod(pq.y, 0.2) > 0.1 ? 1.0 : -1.0;
    float px = mod(pq.x - (dir*mod(pq.y, 0.1)/2.0) + (dir*u_time/(sin(pq.y*3000.0)+3.0)) - (dir*pq.y*2.0), 1.0);
    outColor.rgb *= px;

    // exports
    outColor.rgb *= u_fadein;
    gl_FragColor = outColor;
}