### 《flutter技术入门与实战》的chapter 1读书笔记——flutter的基础知识
---
####入口程序
在dart语言中，`main()`函数是Dart语言的入口，调用的runApp函数是Flutter的入口。
此处不难理解，Flutter是Dart语言的移动框架，如果不调用runApp函数，那你执行的就是一个Dart控制台应用。
```Dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: Center(
          child: Text('Hello World'),
        ),
      ),
    );
  }
}
```
#### Material Design 设计风格
每个dart文件的第一行都会导入一个叫`flutter/material.dart`的包，这个包就是Fultter实现Marterial Design风格的基础包，包含Text,Icon,Image,Row等，可以理解为组件库，Material Design是谷歌推出的一套视觉设计语言，就跟你qq，网易云音乐换可爱风的皮服一样，而Material Design是谷歌风而已。
#### Flutter的主题
我们可以定制主题来让我们的app中使用同一套颜色和字体样式等等，可以定制全局主题或者是局部主题。
```Dart
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(new MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final appName = '自定义主题';

    return new MaterialApp(
      title: appName,
      theme: new ThemeData(
        brightness: Brightness.light,//应用程序整体主题的亮度
        primaryColor: Colors.lightGreen[600],//App主要部分的背景色
        accentColor: Colors.orange[600],//前景色（文本、按钮等）
      ),
      home: new MyHomePage(
        title: appName,
      ),
    );
  }
}

class MyHomePage extends StatelessWidget {
  final String title;

  MyHomePage({Key key, @required this.title}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text(title),
      ),
      body: new Center(
        child: new Container(
          //获取主题的accentColor
          color: Theme.of(context).accentColor,
          child: new Text(
            '带有背景颜色的文本组件',
            style: Theme.of(context).textTheme.title,
          ),
        ),
      ),
      floatingActionButton: new Theme(
        //使用copyWith的方式获取accentColor
        data: Theme.of(context).copyWith(accentColor: Colors.grey),
        child: new FloatingActionButton(
          onPressed: null,
          child: new Icon(Icons.computer),
        ),
      ),
    );
  }
}
```
以上代码中，MyApp 通过new ThemeData对象创建了一个全局的主题。

而创建局部主题则有两种方式：
1. 创建特有的主题数据
实例化一个ThemeData并将其传递给Theme对象
2. 扩展父主题

扩展父主题时无需覆盖所有的主题属性，使用copyWith的方法来实现
这两种方式在`floatingActionButton`中都可以体现
最后，使用该主题，函数Theme.of(context)可以通过上下文来获取主题，方法是查找最近的主题，如果找不到就找整个应用的主题。

#### 有状态组件和无状态组件
