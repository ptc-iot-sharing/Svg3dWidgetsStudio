function newDtSvgBar(widgetLabel) {
  var DEFAULT_TEXT = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 	 viewBox="0 0 405.4 70" style="enable-background:new 0 0 405.4 70;" xml:space="preserve"><style type="text/css"> 	.st0{fill:#2A4147;} 	.st1{fill:#FFFFFF;} 	.st2{font-family:"Arial-Bold", sans-serif;} 	.st3{font-size:13.2px;} 	.st4{fill:{{me.barColor}};} 	.st5{fill:#1E2F33;} 	.st6{fill:#B9C4C6;} </style><g><path class="st0" d="M388.9,7.1l13.1,21.8c2.2,3.8,2.2,8.4,0,12.2l-13.1,21.8c-2.2,3.8-6.2,6.1-10.6,6.1H27.1 		c-4.4,0-8.4-2.3-10.6-6.1L3.3,41.1c-2.2-3.8-2.2-8.4,0-12.2L16.5,7.1C18.7,3.3,22.7,1,27.1,1h351.3C382.7,1,386.8,3.3,388.9,7.1z" 		></path><path class="st1" d="M382,3.7c1.4,0,2.7,0.7,3.4,1.9L401.2,33c0.7,1.2,0.7,2.7,0,3.9l-15.8,27.4c-0.7,1.2-2,1.9-3.4,1.9H23.4 		c-1.4,0-2.7-0.7-3.4-1.9L4.3,36.9c-0.7-1.2-0.7-2.7,0-3.9L20.1,5.7c0.7-1.2,2-1.9,3.4-1.9H382 M382,0H23.4c-2.7,0-5.2,1.5-6.6,3.8 		L1,31.2c-1.4,2.4-1.4,5.3,0,7.6l15.8,27.4c1.4,2.4,3.9,3.8,6.6,3.8H382c2.7,0,5.2-1.5,6.6-3.8l15.8-27.4c1.4-2.4,1.4-5.3,0-7.6 		L388.6,3.8C387.3,1.5,384.7,0,382,0L382,0z"></path></g><text transform="matrix(1 0 0 1 332.3955 57.2977)" class="st1 st2 st3">{{me.value + me.unit}}</text><rect x="27.1" y="14.7" class="st4" ng-style="{\'width\':   ( (me.value - me.minValue) * 86.5 / (me.maxValue - me.minValue) +\'%\')}" height="18.3"></rect><path class="st5" d="M376.8,13H28.6c-1.8,0-3.2,1.5-3.2,3.2v15.5c0,1.8,1.5,3.2,3.2,3.2h348.3c1.8,0,3.2-1.5,3.2-3.2V16.2 	C380.1,14.4,378.6,13,376.8,13z M44.6,16.5h4v15h-4V16.5z M40.6,31.5h-4v-15h4V31.5z M52.6,16.5h4v15h-4V16.5z M60.6,16.5h4v15h-4 	V16.5z M68.6,16.5h4v15h-4V16.5z M76.6,16.5h4v15h-4V16.5z M84.6,16.5h4v15h-4V16.5z M92.6,16.5h4v15h-4V16.5z M100.6,16.5h4v15h-4 	V16.5z M108.6,16.5h4v15h-4V16.5z M116.6,16.5h4v15h-4V16.5z M124.6,16.5h4v15h-4V16.5z M132.6,16.5h4v15h-4V16.5z M140.6,16.5h4v15 	h-4V16.5z M148.6,16.5h4v15h-4V16.5z M156.6,16.5h4v15h-4V16.5z M164.6,16.5h4v15h-4V16.5z M172.6,16.5h4v15h-4V16.5z M180.6,16.5h4 	v15h-4V16.5z M188.6,16.5h4v15h-4V16.5z M196.6,16.5h4v15h-4V16.5z M204.6,16.5h4v15h-4V16.5z M212.6,16.5h4v15h-4V16.5z 	 M220.6,16.5h4v15h-4V16.5z M228.6,16.5h4v15h-4V16.5z M236.6,16.5h4v15h-4V16.5z M244.6,16.5h4v15h-4V16.5z M252.6,16.5h4v15h-4 	V16.5z M260.6,16.5h4v15h-4V16.5z M268.6,16.5h4v15h-4V16.5z M276.6,16.5h4v15h-4V16.5z M284.6,16.5h4v15h-4V16.5z M292.6,16.5h4v15 	h-4V16.5z M300.6,16.5h4v15h-4V16.5z M308.6,16.5h4v15h-4V16.5z M316.6,16.5h4v15h-4V16.5z M324.6,16.5h4v15h-4V16.5z M332.6,16.5h4 	v15h-4V16.5z M340.6,16.5h4v15h-4V16.5z M348.6,16.5h4v15h-4V16.5z M356.6,16.5h4v15h-4V16.5z M364.6,16.5h4v15h-4V16.5z M28.8,16.5 	h3.8v15h-3.8V16.5z M376.6,31.5h-4v-15h4V31.5z"></path><text transform="matrix(1 0 0 1 25.3402 57.4103)" class="st6 st2 st3">{{me.label}}</text></svg>';
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
      name: 'barColor',
      label: 'BarColor',
      isBindingTarget: true,
      datatype: 'string',
      default: '#579baa'
    },   

    {
      name: 'text',
      label: 'Text',
      default: DEFAULT_TEXT,
      datatype: 'xml',
      isVisible: false,
	  value: DEFAULT_TEXT
    }, {
      name: 'textEditor',
      label: 'SVG',
      datatype: 'custom_ui',
      buttonLabel: 'Edit SVG',
      title: 'Edit SVG',
      template: function(widgetProps) {
        return '<textarea ng-model="props.text.value" ng-model-options="{ updateOn: \'default blur\', debounce: { \'default\': 300, \'blur\': 0 } }"  rows="10" cols="80"></textarea>';
      },
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
      default: 140,
      isBindingTarget: false,
      alwaysWriteAttribute: true,
      sortOrder: 123
    }, {
      name: 'canvaswidth',
      label: 'Canvas Width',
      datatype: 'number',
      default: 810,
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
    elementTag: "tml-svg-bar",

    isVisibleInPalette: true,

    supports3D: true,

    label: widgetLabel,
    category: 'ar',

    isContainer: false,

    properties: props,

    isBuildRequired: function(changedProps) {
		debugger;
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
		debugger;
      return ('<!-- 3dSensor -->');
    },

    runtimeTemplate: function(props) {
		debugger;
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
        debugger;
      //'hidden="{{ (me.visible === \'true\' || me.visible === true) ? false : true}}"/>';
      //console.log("twxArSensor.runtimeTemplate: " + tmpl);
      return tmpl;
    }
  };
  return retObj;
}

function twxDtSvgBar() {
  return Twx3dCommon.getWidget('BAR 3D SVG', newDtSvgBar);
}

twxAppBuilder.widget('tml-svg-bar', twxDtSvgBar);