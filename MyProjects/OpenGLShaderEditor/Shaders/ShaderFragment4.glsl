precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

#define X_SCALE.25
#define Z_SCALE 12.

#define SPEED_Z.1
#define SPEED_X 0.
#define X_MAGNITUDE.5
#define FADE_POWER 60.
#define skyblue vec3(.38,.38,1.)
#define darkgreen vec3(.05,.4,.05)
#define lightgreen vec3(.2,.9,.2)
#define black vec3(0.)
#define grey vec3(.5)
#define white vec3(1.)

// Some useful functions
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec2 mod289(vec2 x){return x-floor(x*(1./289.))*289.;}
vec3 permute(vec3 x){return mod289(((x*34.)+1.)*x);}

float simplexnoise(vec2 v)
{
    // Precompute values for skewed triangular grid
    const vec4 C=vec4(.211324865405187,
        // (3.0-sqrt(3.0))/6.0
        .366025403784439,
        // 0.5*(sqrt(3.0)-1.0)
        -.577350269189626,
        // -1.0 + 2.0 * C.x
    .024390243902439);
    // 1.0 / 41.0
    
    // First corner (x0)
    vec2 i=floor(v+dot(v,C.yy));
    vec2 x0=v-i+dot(i,C.xx);
    
    // Other two corners (x1, x2)
    vec2 i1=vec2(0.);
    i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);
    vec2 x1=x0.xy+C.xx-i1;
    vec2 x2=x0.xy+C.zz;
    
    // Do some permutations to avoid
    // truncation effects in permutation
    i=mod289(i);
    vec3 p=permute(
        permute(i.y+vec3(0.,i1.y,1.))
        +i.x+vec3(0.,i1.x,1.));
        
        vec3 m=max(.5-vec3(
                dot(x0,x0),
                dot(x1,x1),
                dot(x2,x2)
            ),0.);
            
            m=m*m;
            m=m*m;
            
            // Gradients:
            // 41 pts uniformly over a line, mapped onto a diamond
            // The ring size 17*17 = 289 is close to a multiple
            // of 41 (41*7 = 287)
            
            vec3 x=2.*fract(p*C.www)-1.;
            vec3 h=abs(x)-.5;
            vec3 ox=floor(x+.5);
            vec3 a0=x-ox;
            
            // Normalise gradients implicitly by scaling m
            // Approximation of: m *= inversesqrt(a0*a0 + h*h);
            m*=1.79284291400159-.85373472095314*(a0*a0+h*h);
            
            // Compute final noise value at P
            vec3 g=vec3(0.);
            g.x=a0.x*x0.x+h.x*x0.y;
            g.yz=a0.yz*vec2(x1.x,x2.x)+h.yz*vec2(x1.y,x2.y);
            return 130.*dot(m,g);
        }
        
        float sumOcatave(vec2 pos,float persistence,float scale,float low,float high)
        {
            const int num_iterations=5;
            float maxAmp=0.;
            float amp=1.;
            float freq=scale;
            float noise=0.;
            
            //add successively smaller, higher-frequency terms
            for(int i=0;i<num_iterations;i++)
            {
                noise+=simplexnoise(vec2(pos.x*freq,pos.y*freq))*amp;
                maxAmp+=amp;
                amp*=persistence;
                freq*=2.;
            }
            
            //take the average value of the iterations
            noise/=maxAmp;
            
            //normalize the result
            noise=noise*(high-low)/2.+(high+low)/2.;
            return noise;
        }
        
        void main()
        {
            // normalized pixel on screen
            vec2 uv=gl_FragCoord.xy/u_resolution.xy;
            // center of screen
            vec2 center=u_resolution.xy/2.;
            // distance from center
            vec2 dCenter=center-gl_FragCoord.xy;
            // height of screen
            float height=u_resolution.y/2.;
            
            vec3 fragColor=vec3(.0);
            
            // pixel above horizon?
            if(dCenter.y<.0)
            {
                // sky fade
                float fade=1.+(dCenter.y/height);
                
                // sky
                float zCamera=10./dCenter.y;
                float xCamera=X_SCALE*dCenter.x*zCamera;
                float yCamera=Z_SCALE*zCamera;
                
                vec2 fragCoord=vec2(xCamera,yCamera);
                
                vec3 color1,color2;
                
                float noise1=sumOcatave(vec2((fragCoord.x*.5)+u_time*.4,(fragCoord.y*4.)+u_time*.1),.5,.4,0.,1.);
                
                float noise2=sumOcatave(vec2((fragCoord.x*.5)+u_time*.25,(fragCoord.y*4.)),.5,.2,0.,1.);
                
                color1=vec3(noise1);
                color2=vec3(noise2);
                vec3 color3=mix(white,grey,color1*color2);
                
                fragColor=vec3(fade*.8,fade*.8,fade*.8+.8)
                +vec3(color1*color2);
                
            }
            else
            {
                // floor
                float zCamera=1./dCenter.y;
                float xCamera=X_SCALE*dCenter.x*zCamera;
                float yCamera=Z_SCALE*zCamera;
                
                vec2 fragCoord=vec2(xCamera,yCamera);
                
                // move
                fragCoord.y+=u_time*SPEED_Z;
                fragCoord.x+=cos(u_time*SPEED_X)*X_MAGNITUDE;
                
                // Convert to Square pattern
                float xSquare=fract(fragCoord.x*4.);
                float ySquare=fract(fragCoord.y*16.);
                
                xSquare=step(.5,xSquare);
                ySquare=step(.5,ySquare);
                
                float block=(xSquare+ySquare)/2.;
                float blockOdd=step(.9,block);
                float blockEven=1.-step(.1,block);
                block=blockEven+blockOdd;
                
                fragColor=vec3(block)
                *lightgreen;
                
                // distance fade
                float fade=1.-(1./(1.+zCamera*FADE_POWER));
                fragColor=mix(fragColor,vec3(1.),fade);
            }
            
            gl_FragColor=vec4(fragColor,1.);
        }