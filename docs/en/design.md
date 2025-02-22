# Design Philosophy

## Minimalism

We hope Pattaya to be as minimal as possible.  

One aspect of minimalism is reducing the cognitive load for developers by introducing fewer new concepts.    
Instead of introducing new concepts, all developer interfaces are built upon existing concepts.    
Everyone understands lines, triangles, bubbles, animated values, and click events.    
Because of this, the learning curve for Pattaya may be only 1/10 of other similar libraries.    
This approach allows us to focus more on practicality, reliability, and performance rather than creating new concepts or marketing.  

In another hand, Pattaya was designed to avoid excessive external dependencies to maintain its lightweight nature.    
It won't secretly install hundreds or thousands of dependencies in **node_modules**,    
keeping user projects clean, optimizing bundle size, and enabling faster application builds.  

## Composition Over Inheritance

Pattaya is built on primitives.    
Primitives in Pattaya refer to fundamental shapes such as triangles, line segments, and arrows, as well as commonly used UI graphics like bubbles.    
We have found that even highly complex-looking graphics can be created using simple primitives.    
By controlling their colors, sizes, and other attributes through JavaScript objects,    
the interface remains visually appealing and highly practical without being restricted by a library's specific built-in features.    
This ensures that when issues arise, developers are not left without options.  

In contrast, while Pattaya constructs new graphics through the composition of different primitives,    
other libraries require dozens of parameters to control a graphic’s behavior.   
In other words, those libraries force developers to inherit predefined shapes.    
For example, in the popular visualization library matplotlib,    
you might need 20+ parameters to configure a bar chart, which is akin to inheriting a bar chart class.   
If you need to add a tooltip to the bar chart but matplotlib does not support it,    
you must resort to tricky workarounds.    

In Pattaya, everything is built upon composition from the ground up.    
Adding lines or bubbles is a natural process — you don’t even need to worry about implementation details.    
Another advantage of using Pattaya is that you don't need to learn how to tweak behavior    
from dozens or even hundreds of parameters, nor do you need to study library-specific APIs.    
In fact, these other libraries and Pattaya work at different levels.    
You can build your own visualization or graphics library on top of Pattaya.   

If you can draw text, rectangles, and arrows, you can draw a bar chart.    
Extending such a chart is incredibly simple.    
When requirements change, you no longer need to worry about whether a feature is supported, because you have full controll of your graph.  

## Native JavaScript First

Pattaya has no built-in state management paradigms.    
Developers can freely use plain JavaScript objects to control graphics.    
The underlying **Depict** does not enforce state-driven, data-driven, or event-driven patterns.    
Choose the approach that suits you best.  

If you opt for a state-driven approach,    
you will face challenges regarding component communication.    
Fortunately, the primitive-based design of Pattaya eliminates the need for complex components communication!    

If you dislike state management libraries like Redux, MobX, Flux, or Vuex,    
then this native JavaScript + render approach will be perfect for you.    

Unlike other frameworks, you don’t need to worry about whether a page re-renders,    
or whether to use deep or shallow comparison,    
or hooks like **React.useMemo**.    
There are no "pure components" or "functional components" to learn.    

If you request a re-render, the page will schedule an internal render.    
If you don’t request it, nothing changes.    
This design, without black magic or new paradigms, may not seem fancy,    
but it provides high performance and simplicity with full control.  

## Aesthetic Appeal

Pattaya strives to be the most visually appealing graphics library with its default settings.  
