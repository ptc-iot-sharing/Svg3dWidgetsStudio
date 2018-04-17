function newDtSvgCircle(widgetLabel) {

var DEFAULT_TEXT = '<svg id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">\
  <style> \
    \
circle {\
  stroke-dashoffset: 0;\
  transition: stroke-dashoffset 1s linear;\
  stroke: #666;\
  stroke-width: 1em;\
}\
#bar {\
  stroke: #FF9F1E;\
}\
\
#text_inside {\
  line-height: 35px;\
  font-size: 2em;\
  display: inline-block;\
  font-family: sans-serif;\
}\
\
  </style>\
  <circle r="90" cx="100" cy="100" fill="white" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>\
  <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" transform="rotate(-90,100,100)" style="stroke-dashoffset: {{3.14*180*(100-(me.value - me.minValue) * 100 / (me.maxValue - me.minValue))/100}}px"></circle>\
<text id="text_inside">\
  <tspan font-size="1.4em" text-anchor="middle" x="50%" y="50%" dy="0">{{me.value + me.unit}}</tspan>\
  <tspan font-size="1.05em" fill="#959595" text-anchor="middle" x="50%" y="50%" dy="45">{{me.label}}</tspan>\
  \
  </text>\
</svg>';
  var properties = [{
      name: 'src',
      label: 'Resource',
      datatype: 'resource_url',
      resource_image: true,
      default: 'Default/vu_gauge1.svg',
      isBindingTarget: true,
      alwaysWriteAttribute: true,
      sortOrder: 2
    }, {
      name: 'label',
      label: 'Label',
      datatype: 'string',
      isBindingTarget: true,
      default: ''
    }, {
      name: 'value',
      label: 'Value',
      datatype: 'number',
      isBindingTarget: true,
      default: '100'
    }, {
      name: 'minValue',
      label: 'Min Value',
      isBindingTarget: true,
      datatype: 'number',
      default: '0'
    }, 
    {
      name: 'maxValue',
      label: 'Max Value',
      isBindingTarget: true,
      datatype: 'number',
      default: '100'
    },
    {
      name: 'unit',
      label: 'Unit',
      isBindingTarget: true,
      datatype: 'string',
      default: '%'
    },
     {
      name: 'textColor',
      label: 'textColor',
      isBindingTarget: true,
      datatype: 'string',
      default: '#125E3D'
    },   

    {
      name: 'text',
      label: 'Text',
      default: DEFAULT_TEXT,
      datatype: 'string',
      isVisible: false,
	  value: DEFAULT_TEXT
    }, {
      name: 'textEditor',
      label: 'Text',
      datatype: 'custom_ui',
      buttonLabel: 'Edit Text',
      title: 'Edit Text',
      template: function(widgetProps) {
        return '<textarea ng-model="props.text.value" ng-model-options="{ updateOn: \'default blur\', debounce: { \'default\': 300, \'blur\': 0 } }"  rows="10" cols="80"></textarea>';      },
      sortOrder: 1
    }, {
      name: 'canvasgrowthoverride',
      label: 'Canvas Growth Override',
      datatype: 'string',
      default: 'image+text',
      isBindingTarget: true,
      editor: 'select',
      options: [{
        label: 'Canvas grows with text size',
        value: 'text'
      }, {
        label: 'Canvas grows with image Size',
        value: 'image'
      }, {
        label: 'Canvas grows with image and text sizes',
        value: 'image+text'
      }, {
        label: 'No Override',
        value: 'canvas'
      }],
      sortOrder: 122
    }, {
      name: 'canvasheight',
      label: 'Canvas Height',
      datatype: 'number',
      default: 600,
      isBindingTarget: false,
      alwaysWriteAttribute: true,
      sortOrder: 123
    }, {
      name: 'canvaswidth',
      label: 'Canvas Width',
      datatype: 'number',
      default: 600,
      isBindingTarget: false,
      alwaysWriteAttribute: true,
      sortOrder: 124
    }, {
      name: 'billboard',
      label: 'Billboard',
      datatype: 'boolean',
      default: true,
      isBindingTarget: true,
      alwaysWriteAttribute: true,
      sortOrder: 200
    }
  ];

  properties.push(Twx3dCommon.getPivotProperty());
  properties.push(Twx3dCommon.getWidthProperty());
  properties.push(Twx3dCommon.getHeightProperty());

  var overlay = Twx3dCommon.arrayToMap(properties);

  var props = Twx3dCommon.new3dProps(overlay);

  var retObj = {
    elementTag: "tml-svg-circle",

    isVisibleInPalette: true,

    supports3D: true,

    label: widgetLabel,
    category: 'ar',

    groups: ['SVG Augmentations'],
    isContainer: false,

    properties: props,

    isBuildRequired: function(changedProps) {
      if (changedProps === undefined) {
        return false;
      }
      var changedPropKeys = Object.keys(changedProps);

      if (changedPropKeys.length == 0) {
        return false;
      }

      for (var i = 0; i < changedPropKeys.length; i++) {
        var currentKey = changedPropKeys[i];
        //if any of the changed props show up in overlay return true
        if (overlay[currentKey] !== undefined) {
          return true;
        }
      }
    },

    designTemplate: function(props) {
      return ('<!-- 3dSensor -->');
    },

    runtimeTemplate: function(props) {
      // no longer builds textattrs or imageattrs live here
      var tmpl = '<twx-dt-svg ' +
        'id="' + props.widgetId + '" ' +
        'x="{{me.x}}" ' +
        'y="{{me.y}}" ' +
        'z="{{me.z}}" ' +
        'rx="{{me.rx}}" ' +
        'ry="{{me.ry}}" ' +
        'rz="{{me.rz}}" ' +
        'sx="{{me.scale.split(\' \')[0] || me.scale}}" ' +
        'sy="{{me.scale.split(\' \')[1] || me.scale}}" ' +
        'sz="{{me.scale.split(\' \')[2] || me.scale}}" ' +
        'billboard="{{me.billboard}}" ' +
        'occlude="{{me.occlude}}" ' +
        'opacity="{{me.opacity}}" ' +
        'decal="{{me.decal}}" ' +
        'canvasheight="{{me.canvasheight}}" ' +
        'canvaswidth="{{me.canvaswidth}}" ' +
        'height="{{me.height}}" ' +
        'width="{{me.width}}" ' +
        'canvasgrowthoverride="{{me.canvasgrowthoverride}}" ' +
        'textx="{{me.textx}}" ' +
        'texty="{{me.texty}}" ' +
        'imagex="{{me.imagex}}" ' +
        'imagey="{{me.imagey}}" ' +
        'shader="{{me.shader}}" ' +
        //'visible="{{me.visible}}" ' +
        'hidden="{{!me.visible}}">' + props.text + "</twx-dt-svg>";
      //'hidden="{{ (me.visible === \'true\' || me.visible === true) ? false : true}}"/>';
      //console.log("twxArSensor.runtimeTemplate: " + tmpl);
      return tmpl;
    },

    events: [
      {
        name: 'click',
        label: 'ves-ar-extension:Click'
      }
    ]
  };
  return retObj;
}

function twxDtSvgCircle() {
  return Twx3dCommon.getWidget('CIRCLE 3D SVG', newDtSvgCircle);
}

twxAppBuilder.widget('tml-svg-circle', twxDtSvgCircle);