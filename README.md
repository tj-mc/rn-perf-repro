# React Native Performance Regression Reproducer

This is a reproducer for performance regressions in React Native, as described by [Issue #36296](https://github.com/facebook/react-native/issues/36296).

The main branch is at .68.7. 

1000 views are rendered, each of which contains a timer that runs a state update an animation for that view.
The view in the white box is animated using the JS driver, which we use to observe the performance of the JS thread.

Note that smoothness is highest in .68.7, very poor in .70.12, and somewhere in between for .72.3.
If a difference is not seen, increase the number of views in the Array.map.

All demos were recorded in Release mode.

## Video Demos
### [.68.7](./assets/68-7-comp.mp4)
Very smooth animation, with no noticeable frame drops.

### [.70.12](./assets/70-12-comp.mp4)
Very poor animation, with many noticeable frame drops.

### [.72.3](./assets/72-3-comp.mp4)
Much improved over 70.12, but not as smooth as 68.7.
