# **React Tooltip** ✅

<code>React tooltip</code> is a React.JS Component that brings usefull UX and UI information in elements of your website.

# **Installation** ⌨️

React Tooltip uses hooks, so you need to import the useState() hook to make it work.

```javascript
import {useState} from "react"
```

# **How to use**   🖥
The component can be configured with 3 entries (props): "content", "position" and "type", each one being a string. 
- the **<code>content</code>** accepts any string values and represents the text displayed on the tooltip;
- the **<code>position</code>** accepts "top" or "bottom" values, to set the tooltip relatively to the element;
- the **<code>type</code>** accepts "input" for value, if you want the tooltip to appear when the focus is on an input. With any other string or no value, the tooltip will appear on hover.

```javascript
<Tooltip content="This is what is gonna be displayed" postion="top" type="input">
   <div>Foo</>
</Tooltip>
```

# **What's next? (Features roadmap)**
This beta version of React Tooltip works localy, and haven't been tested in production yet. \

## What's to improve: 
- possibilty of positionning the tooltip on the left or right of the element;
- displaying the tooltip arrow depending of the tooltip's position (appears only at the bottom now);
- adding CSS transitions to the tooltip 

# **Author** 🧔🏽‍♂️
[Marc Ramos](https://github.com/gitmarcramos) 


