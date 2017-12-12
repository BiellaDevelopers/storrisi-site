'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/simonetorrisi/Documents/www/biellaDevelopers/storrisi-site/pages/index.js?entry';


var PostLink = function PostLink(props) {
  return _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { as: '/p/' + props.id, href: '/post?title=' + props.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.title)));
};

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'My Blog'), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(PostLink, { id: 'suca', title: 'Hello Next.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement(PostLink, { id: 'learn-nextjs', title: 'Learn Next.js is awesome', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement(PostLink, { id: 'deploy-nextjs', title: 'Deploy apps with Zeit', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkxpbmsiLCJQb3N0TGluayIsInByb3BzIiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBQyxPQUFEO3lCQUNmLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQyxnQ0FBSyxZQUFVLE1BQWhCLEFBQXNCLElBQU0sdUJBQXFCLE1BQWpELEFBQXVEO2dCQUF2RDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsV0FIVyxBQUNmLEFBQ0UsQUFDRSxBQUFVO0FBSGhCLEFBUUE7O2tCQUFlLFlBQUE7eUJBQ2IsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0EsNEJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsbUNBQ0UsQUFBQyxZQUFTLElBQVYsQUFBYSxRQUFPLE9BQXBCLEFBQTBCO2dCQUExQjtrQkFERixBQUNFLEFBQ0E7QUFEQTtvQ0FDQSxBQUFDLFlBQVMsSUFBVixBQUFhLGdCQUFlLE9BQTVCLEFBQWtDO2dCQUFsQztrQkFGRixBQUVFLEFBQ0E7QUFEQTtvQ0FDQSxBQUFDLFlBQVMsSUFBVixBQUFhLGlCQUFnQixPQUE3QixBQUFtQztnQkFBbkM7a0JBTlMsQUFDYixBQUVFLEFBR0U7QUFBQTs7QUFOTiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2ltb25ldG9ycmlzaS9Eb2N1bWVudHMvd3d3L2JpZWxsYURldmVsb3BlcnMvc3RvcnJpc2ktc2l0ZSJ9