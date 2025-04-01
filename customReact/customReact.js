function customRender(ReactElement, container)
{
   
    // const domElement=document.createElement(ReactElement.type)
    // domElement.textContent=ReactElement.children
    // domElement.setAttribute('href', ReactElement.props.href)
    // domElement.setAttribute('target', ReactElement.props.target)
    // container.appendChild(domElement)

    const domElement=document.createElement(ReactElement.type)
    domElement.innerHTML=ReactElement.children
    for(const prop in ReactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, ReactElement.props[prop])
    }
    container.appendChild(domElement)

};


const ReactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    }, 
    children:'Click me to navigate to google'
};

const container=document.querySelector('#root');

customRender(ReactElement, container);