<template>
    <div>
        <div id="myDiagramDiv"></div>
    </div>
</template>
<script>
    import go from 'gojs'
    export default {
        name:'goDemo',
        mounted() {
            this.init()
        },
        methods: {
        init(){
	        var $ = go.GraphObject.make;
            var myDiagram =
            $(go.Diagram, "myDiagramDiv",
                {
                initialContentAlignment: go.Spot.Center, // 居中显示内容
                "undoManager.isEnabled": true // 打开 Ctrl-Z 和 Ctrl-Y 撤销重做功能
                });

            // 我们早先定义的节点模板
            myDiagram.nodeTemplate =
            $(go.Node, "Horizontal",
                { background: "#44CCFF" },
                $(go.Picture,
                { margin: 10, width: 50, height: 50, background: "red"},
                new go.Binding("source")),
                $(go.TextBlock, "Default Text",
                { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
                new go.Binding("text", "name"))
            );

            var model = $(go.TreeModel);
            model.nodeDataArray =
            [ // 必须有"key"和"parent"的字段名,
            // 你还可以添加任何需要的其他字段
            { key: "1",              name: "Don Meow",   source: "home.png" },
            { key: "2", parent: "1", name: "Demeter",    source: "home.png" },
            { key: "3", parent: "1", name: "Copricat",   source: "home.png" },
            { key: "4", parent: "3", name: "Jellylorum", source: "home.png" },
            { key: "5", parent: "3", name: "Alonzo",     source: "home.png" },
            { key: "6", parent: "2", name: "Munkustrap", source: "home.png" }
            ];
            myDiagram.model = model;
                }
            },
        }
</script>
<style >
 #myDiagramDiv{
     background: #ccc;
     height: 100vh;
     width: 100vw;
 }
</style>