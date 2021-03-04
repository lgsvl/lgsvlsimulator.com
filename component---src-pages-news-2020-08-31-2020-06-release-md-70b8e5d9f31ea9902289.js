(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{KYf9:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return l}));var o=t("8o2o"),s=(t("q1tI"),t("7ljp")),i=t("qmQJ"),r={},n={_frontmatter:r},c=i.a;function l(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)(c,Object.assign({},n,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lgsvl/simulator/releases/tag/2020.06"}),"2020.06 release")," of SVL Simulator is here! This release contains several important additions, as well as critical fixes and improvements. Please see the major changes below. You can see the full list of changes in our ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"/docs/changelog"}),"release notes"),"."),Object(s.b)("h3",{id:"support-for-autowareai-114",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h3"},{href:"#support-for-autowareai-114","aria-label":"support for autowareai 114 permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Support for Autoware.AI 1.14"),Object(s.b)("div",{className:"video-container"},Object(s.b)("iframe",{style:{display:"block",margin:"auto"},width:"560",height:"315",src:"https://www.youtube.com/embed/C4ngQWUseJI",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),Object(s.b)("p",null,"We have updated our ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"/docs/autoware-instructions"}),"documentation")," to support the most current version of Autoware.AI, 1.14. You can follow the video guide as we walk through an example simulation that interfaces with this open source ROS1-based autonomous driving system."),Object(s.b)("h3",{id:"support-for-modular-testing",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h3"},{href:"#support-for-modular-testing","aria-label":"support for modular testing permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Support for modular testing"),Object(s.b)("div",{className:"video-container"},Object(s.b)("iframe",{style:{display:"block",margin:"auto"},width:"560",height:"315",src:"https://www.youtube.com/embed/781zkzN2xMg",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),Object(s.b)("p",null,"With our simulator publishing ground truth information for non-ego agents and obstacles, you can now ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"/docs/modular-testing"}),"test Apollo by module"),", including prediction and planning. This means that, if you work on just the planning subsystem, you can quickly create scenarios and test your algorithms in isolation, but still as part of an end-to-end test."),Object(s.b)("h3",{id:"ultrasonic-sensor",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h3"},{href:"#ultrasonic-sensor","aria-label":"ultrasonic sensor permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Ultrasonic sensor"),Object(s.b)("div",{className:"video-container"},Object(s.b)("iframe",{style:{display:"block",margin:"auto"},width:"560",height:"315",src:"https://www.youtube.com/embed/Oe2j-2_Kc_I",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),Object(s.b)("p",null,"We now support a default ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"/docs/sensor-json-options#ultrasonic"}),"ultrasonic distance sensor"),". This sensor can be used to detect objects within a specified threshold distance."),Object(s.b)("h3",{id:"sensor-tf-visualization",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h3"},{href:"#sensor-tf-visualization","aria-label":"sensor tf visualization permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Sensor TF Visualization"),Object(s.b)("div",{className:"video-container"},Object(s.b)("iframe",{style:{display:"block",margin:"auto"},width:"560",height:"315",src:"https://www.youtube.com/embed/Q00B7vqtwrE",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),Object(s.b)("p",null,"In interactive mode, you can now view each ego vehicle sensor’s ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"/docs/sensor-visualizers"}),"transform")," and relative coordinate frame. If you added a parent transform sensor, you will see the base_link location as well, allowing you to visually compare the coordinate frames."),Object(s.b)("h3",{id:"bridge-plugin-system",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h3"},{href:"#bridge-plugin-system","aria-label":"bridge plugin system permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Bridge plugin system"),Object(s.b)("p",null,"We now support bridge plugins. If you use a custom middleware that is not based on our supported ROS, ROS2, or CyberRT interfaces, you can build your own. In Developer Mode, you can write a custom bridge which can interface with the simulator’s messages and publish correctly formatted messages to your\nmiddleware/interface. See the ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"/docs/bridge-plugins"}),"docs")," and ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lgsvl/LoggingBridge"}),"an example"),"."),Object(s.b)("h3",{id:"improved-ros2-bridge---native-implementation",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h3"},{href:"#improved-ros2-bridge---native-implementation","aria-label":"improved ros2 bridge   native implementation permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Improved ROS2 bridge - native implementation"),Object(s.b)("p",null,"The default ROS2 interface for SVL Simulator has been changed to use a custom, native ROS2 bridge. This bridge greatly improves performance, especially when sending large amounts of sensor data, over the previously used ros2-web-bridge. It is available as a ROS 2 package and is open source, supporting ROS 2 Foxy, Eloquent, and Dashing. Please see our ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"/docs/ros2-bridge"}),"guide"),"."),Object(s.b)("h3",{id:"improved-hd-map-importexportannotation",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h3"},{href:"#improved-hd-map-importexportannotation","aria-label":"improved hd map importexportannotation permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Improved HD map import/export/annotation"),Object(s.b)("p",null,"Our map annotation tool now includes a button to add boundary lines. This allows you to create synthetic boundary lines for every lane annotation so you don't need to annotate them in order to export maps to a supported format. We have also fixed several bugs in the OpenDrive map importer and exporter to handle special edge cases."),Object(s.b)("p",null,"You can find the full ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lgsvl/simulator/releases/tag/2020.06"}),"SVL Simulator 2020.06 release"),"."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-news-2020-08-31-2020-06-release-md-70b8e5d9f31ea9902289.js.map