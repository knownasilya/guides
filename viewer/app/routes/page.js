import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      id: 'index.html',
      title: 'Index',
      html: `<h1>
      Guides and Tutorials
    <a href="https://github.com/emberjs/guides/edit/master/source/index.md"
    target="_blank" class="edit-page icon-pencil">Edit Page</a>
    </h1>
    <hr>

    <p>Welcome to the Ember.js Guides! This documentation will take you from
    total beginner to Ember expert.</p>
    <h2 class='anchorable-toc' id='toc_organization'>Organization</h2>
      <p>On the left side of each page in the Guides is a table of contents,
      organized into sections that can be expanded to show the topics
    they cover. Both the sections and the topics within each section are
    ordered from the most basic concepts to the more advanced.</p>

    <p>The Guides are intended to contain practical explanations of how to
    build Ember apps, focusing on the most widely-used features of Ember.js.
      For exhaustive documentation of every Ember feature and API, see the
    <a href="http://emberjs.com/api/">Ember.js API documentation</a>.</p>

    <p>The Guides begin with an explanation of how to get started with Ember, followed
      by a tutorial on how to build your first Ember app. If you&#39;re brand new to
    Ember, we recommend you start off by following along with these first two
    sections of the Guides.</p>
    <h2 class='anchorable-toc' id='toc_assumptions'>Assumptions</h2>
      <p>While we try to make the Guides as beginner-friendly as we can, we must
    establish a baseline so that the guides can keep focused on Ember.js
    functionality. We will try to link to appropriate documentation whenever
    a concept is introduced.</p>

    <p>To make the most out of the guides, you should have a working knowledge of:</p>

    <ul>
    <li><strong>HTML, CSS, JavaScript</strong> - the building blocks of web pages. You can find documentation of each of these technologies at the <a href="https://developer.mozilla.org/en-US/docs/Web">Mozilla Developer Network</a>.</li>
    <li><strong>Promises</strong> - the native way to deal with asynchrony in your JavaScript code. See the relevant <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Mozilla Developer Network</a> section.</li>
    <li><strong>ES2015 modules</strong> - you will better understand Ember CLI&#39;s project structure and import paths if you are comfortable with <a href="http://jsmodules.io/">ES6 JavaScript Modules</a>.</li>
    <li><strong>ES2015 syntax</strong> - Ember CLI comes with Babel.js by default so you can
    take advantage of newer language features such as arrow functions, template
    strings, destructuring, and more. You can check the
    <a href="https://babeljs.io/docs/learn-es2015/">Babel.js documentation</a> or read <a href="https://leanpub.com/understandinges6/read">Understanding ECMAScript 6</a>
    online.</li>
    </ul>
    <h2 class='anchorable-toc' id='toc_reporting-a-problem'>Reporting a problem</h2>
    <p>Typos, missing words, code samples with errors are all considered
    documentation bugs. If you spot one of them, or want to otherwise improve
    the existing guides, we are happy to help you help us!</p>

    <p>Some of the more common ways to report a problem with the guides are:</p>

    <ul>
    <li>Using the pencil icon on the top-right of each guide page</li>
    <li>Opening an issue/pull request to <a href="https://github.com/emberjs/guides/">the GitHub repository</a></li>
    </ul>

    <p>Clicking the pencil icon will bring you to GitHub&#39;s editor for that
      guide so you can edit right away, using the Markdown markup language.
      This is the fastest way to correct a typo, a missing word, or an error in
    a code sample.</p>

    <p>If you wish to make a more significant contribution be sure to check our
    <a href="https://github.com/emberjs/guides/issues">issue tracker</a> to see if your issue is already being
    addressed. If you don&#39;t find an active issue, open a new one.</p>

    <p>If you have any styling questions, or about the contributing process you
    can check out our <a href="https://github.com/emberjs/guides/blob/master/CONTRIBUTING.md">contributing guide</a>. If your
    question persists, reach us at <code>#documentation</code> on the <a href="https://ember-community-slackin.herokuapp.com/">Slack
    group</a>.</p>

    <p>Good luck!</p>`
    }
  }
});
