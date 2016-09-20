function newDtSvg(widgetLabel) {
  var ELEMENT_NAME = 'tml-svg';
  var properties = [{
      name: 'src',
      label: 'Resource',
      datatype: 'resource_url',
      resource_image: true,
      default: 'Default/vu_gauge1.svg',
      isBindingTarget: true,
      alwaysWriteAttribute: true,
      sortOrder: 2,
      isVisible: false
    },
    {
      name: 'text',
      label: 'Text',
      datatype: 'xml',
      default: '',
      isVisible: false
    }, {
      name: 'textEditor',
      label: 'Text',
      datatype: 'custom_ui',
      buttonLabel: 'Edit Text',
      title: 'Edit Text',
      template: function() {
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
      default: 128.0,
      isBindingTarget: false,
      alwaysWriteAttribute: true,
      sortOrder: 123
    }, {
      name: 'canvaswidth',
      label: 'Canvas Width',
      datatype: 'number',
      default: 128.0,
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
    elementTag: ELEMENT_NAME,

    isVisibleInPalette: true,

    supports3D: true,

    category: 'ar',

    label: widgetLabel,

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
    }
  };
  return retObj;
}

function twxDtSvg() {
  return Twx3dCommon.getWidget('3D SVG', newDtSvg);
}

twxAppBuilder.widget('tml-svg', twxDtSvg);