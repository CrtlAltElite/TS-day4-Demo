import {Canvas,  WidgetClick, CircleShape, LeftLeaningShape, RightLeaningShape, Widget} from "./Widget";

const canvas = new Canvas(document.body);
const rla = new RightLeaningShape();
const lla = new LeftLeaningShape();
const circlea = new CircleShape();
const rlwidget = new Widget();
canvas.state={testVar:"Kevin is a God", var2: "I should still be here"}

rlwidget.shape = rla;
rlwidget.content = `<h1>OOP Rules</h1> {{testVar}} {{var2}}`
canvas.addWidget(rlwidget);

const llwidget = new Widget();
llwidget.shape = lla;
llwidget.locationLeft = 3;
llwidget.locationTop = 4;
llwidget.shape.borderColor = "red";
llwidget.shape.zIndex = 99;

let contentImage:string= `<img style="height:auto; max-width:80%;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1000px-LEGO_logo.svg.png">`
llwidget.content = contentImage;
llwidget.locationLeft = 2;
llwidget.locationTop = 2;
canvas.addWidget(llwidget);

const circleWidget = new Widget();
circleWidget.shape = circlea;
circleWidget.locationTop = 3;
circleWidget.locationLeft = 3;
new WidgetClick(circleWidget, ( _ , widget: Widget) => {
  let widgets = widget.canvas?.widgets!;
  for (let w of widgets) {
    w.width += 2;
    w.height += 2;
    canvas.state={testVar:"Lucas is so Smart"}
    setTimeout(() => {
      w.width -= 2;
      w.height -= 2;
    }, 1000);
  }
  widget.canvas?.render();
  setTimeout(() => {
    widget.canvas?.render();
  }, 1000);
});
canvas.addWidget(circleWidget);
