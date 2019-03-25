### 那些我遇到的react native的坑
---
Q: **android手机使用webview的时候，header被隐藏了**

A: 样式里面加: `elevation: 1`，android里面的elevation，就类似于我们所熟知的zIndex的属性，层级调高了，也就能看见header组件了。

>(Android-only) Sets the elevation of a view, using Android's underlying elevation API. This adds a drop shadow to the item and affects z-order for overlapping views. Only supported on Android 5.0+, has no effect on earlier versions.
---
Q: **在react native里面，如何只对一个长方形的一角设置圆角？**

A: 单独设置
- borderBottomLeftRadius: number
- borderBottomRightRadius: number
- borderTopLeftRadius: number
- borderTopRightRadius: number

**并且加上 ` overflow: 'hidden',`**

``` javascript
<View style={styles.imgBox}>
    <Image source={{ uri: 'your image url' }} style={styles.img} />
</View>
```
``` javascript
const styles = EStyleSheet.create({
    imgBox: {
        width: px(72),
        height: px(72),
        borderBottomLeftRadius: 2,
        borderTopLeftRadius: 2,
        overflow: 'hidden',
    },
    img: {
        width: px(72),
        height: px(72),
    },
})
```
---
Q: **使用border绘制三角形的时候，ios的三角形和andorid的三角形不一致**

A: 将`borderTopWidth: 0` 改为 `borderTopWidth: 10`, 0的表现在ios和andorid上不一样。

---
Q: **如何让tooltip不遮挡住下层，可以使下层触发触摸点击事件等**

A: 在元素上加上`pointerEvents="none"`的属性
```javascript
<Animated.View style={[styles.tooltipWrapper, this.wrapperPositionStyle(), animateTextTip]} pointerEvents="none">
```

Q: **Tried to register two views with the same name XXX(现有组件)**
A: React Native starting from version 0.49 triggers this error if you are trying to call requireNativeComponent() for same component more than once. Even if they are called from different modules.