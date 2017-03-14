(function() {
    'use strict';

    angular.module('tml-svg', []).directive('twxDtSvg', ['tml3dRenderer', function(renderer) {
        return {
            restrict: 'E',
            priority: -1,
            require: '^twxDtTracker',
            link: function(scope, element, attrs, ctrl) {
                // for some reason, we cannot call innerHTML or outerHTML on the element itself, so just watch the svg
                var svgElement = element.find("svg")[0];
                scope.$watch(function() {
                    return svgElement.outerHTML;
                }, function(value) { //%WARNING -- this is probably a perf killer
                    // this ensures it's executed after the binding is done, but before the DOM is rendered
                    scope.$evalAsync(function() {
                        var obj = {
                            objtype: "twx-dt-svg",
                            name: element.attr('id'),
                            element: element
                        };
                        // rebuild svg element
                        VF_ANG.buildARSVG(obj, function(ctx) {
                            VF_ANG.svgToImage(ctx, function(ctx, imageData) {
                                renderer.setTexture(ctx.element.attr('id'), imageData);
                            });
                        });
                    });
                });

            }

        };
    }]);
}());
// fix the function for unicode chars
setTimeout(function (){
	VF_ANG.svgToImage = function(objCtx, callback) {
		var svgElem = objCtx.element.find("svg")[0];
		var seri = new XMLSerializer();
		var src = seri.serializeToString(svgElem);
		console.log("test");
		// make it work for unicode chars
		var imgSrc = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(src)));

		var image = new Image();
		image.width = objCtx.element.attr("canvaswidth");
		image.height = objCtx.element.attr("canvasheight");
		image.src = imgSrc;
		image.onload = function () {
		  var canvas = document.createElement('canvas');
		  canvas.width = image.width;
		  canvas.height = image.height;
		  // Get drawing context for the Canvas
		  var ctx = canvas.getContext('2d');
		  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
		  callback(objCtx, canvas.toDataURL());
          canvas = null;
          image = null;
		};
	 };
},1000);