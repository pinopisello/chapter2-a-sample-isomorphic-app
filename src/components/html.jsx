import React from 'react';

export default class HTML extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Chapter 2 - Recipes</title>
          <link rel="stylesheet"
                href="https://cdn.jsdelivr.net/semantic-ui/2.2.2/semantic.min.css" />
        </head>
        <body>
          <div id="react-content"
               dangerouslySetInnerHTML={{__html: this.props.html}}/>   {/* this.props.html e' il preprendered lato server */}
          <script dangerouslySetInnerHTML={{__html: this.props.data}}/>{/* this.props.data  e' il redux state come json object */}
          <script src="/browser.js"/>
        </body>
      </html>
    );
  }
}
