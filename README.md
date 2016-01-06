## React.js slider component

A simple slider made with react.js

[demo](http://emadb.github.com/react-discrete-slider/)

Install with

```npm install react-discrete-slider --save```

Properties and configuration

```jsx
<Bar
  value={this.state.value}
  showLabel
  buttons
  getColor={getColorFunction}/>
```

- `value` (number): value to be shown
- `showLabel` (bool): true if you want to view the  labels
- *buttons (bool)*: true if you want to use the buttons
- `getColor` (function): function to get the color. The function receive the current value so that the bar color can change based on value
- `size` (number): number of steps
- `step` (number): size of step for dividing the bar
