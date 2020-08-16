学习笔记

html 解析
1. 解析标签为元素
2. 同时处理元素上的属性赋予元素 attributes中
3. 处理元素关系，把元素的子元素存放在 children中
4. 文本节点以文本节点的方式同样存放在 children中
DOM 树构建完成

css 解析及规则计算
1. 处理style标签中的文本为css，交由css parser解析为 ast 
2. 获取父元素队列并逐一让选择器和元素匹配
3. 计算规则优先级后，把高优先级的规则赋予元素dom树上的computed属性。