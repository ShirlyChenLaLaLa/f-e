### React Native 动画（Animated）
---
- [[译]详解React Native动画](https://github.com/dwqs/blog/issues/41)
- [React Native 详解](https://future-challenger.gitbooks.io/react-native-animation/content/panresponder.html)
#### 创建动画值
为了创建一个动画，我们首先要创建一个动画使用的值。一般可以这样做：
new Animated.Value(0)

#### 动画值类型
Animated 提供了两种类型的值：
- Animated.Value() 用于单个值。
- Animated.ValueXY() 用于矢量值。
创建一个Animated.ValueXY实例和Animated.Value基本上是一样的：new Animated.ValueXY({x: 0, y: 0})。只不过ValueXY一般用于处理组件的位置或是处理手势。

#### 创建动画的方法
Animated 用于创建动画的主要方法：
- Animated.timing()：最常用的动画类型，使一个值按照一个过渡曲线而随时间变化。（消耗类型的）
- Animated.spring()：弹簧效果，基础的单次弹跳物理模型实现的 spring 动画。使用spring可以定义一个只需要起始值和最终值的动画，不需要给出动画执行的时间。
- Animated.decay()：衰变效果，以一个初始的速度和一个衰减系数逐渐减慢变为0。

#### 实现组合动画
Animated 实现组合动画的主要方式：
- Animated.parallel()：同时开始一个动画数组里的全部动画。默认情况下，如果有任何一个动画停止了，其余的也会被停止。可以通过stopTogether 选项设置为 false 来取消这种关联。
- Animated.sequence()：按顺序执行一个动画数组里的动画，等待一个完成后再执行下一个。如果当前的动画被中止，后面的动画则不会继续执行。使用sequence可以把多个动画组织起来，然他们依次顺序执行。
- Animated.stagger()：一个动画数组，传入一个时间参数来设置队列动画间的延迟，即在前一个动画开始之后，隔一段指定时间才开始执行下一个动画里面的动画，并不关心前一个动画是否已经完成，所以有可能会出现同时执行（重叠）的情况。

#### 可动画化的四个组件
Animated 封装了四个可以动画化的组件：
- Animated.View
- Animated.Text
- Animated.Image
- Animated.ScrollView

#### 合成动画值
- Animated.add()
- Animated.divide()
- Animated.modulo()
- Animated.multiply()
可以使用加减乘除以及取余等运算来把两个动画值合成为一个新的动画值。

#### 插值函数
插值函数：
interpolate()：将输入值范围转换为输出值范围