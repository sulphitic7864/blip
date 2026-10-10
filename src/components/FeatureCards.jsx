import {
FiZap,
FiLayers,
FiSettings
} from "react-icons/fi";


const features = [

{
icon:<FiZap/>,
title:"Fast AI Automation",
text:"Automate repetitive tasks easily."
},

{
icon:<FiLayers/>,
title:"Multiple Accounts",
text:"Manage everything in one place."
},

{
icon:<FiSettings/>,
title:"Advanced Controls",
text:"Customize every workflow."
}

];


function FeatureCards(){

return (

<section className="
max-w-6xl mx-auto
grid md:grid-cols-3
gap-6
px-6
py-20
">


{
features.map((item,index)=>(

<div
key={index}
className="
bg-white
rounded-3xl
p-8
border
shadow-sm
hover:-translate-y-2
transition
">


<div className="
text-orange-500
text-3xl
">

{item.icon}

</div>


<h3 className="
text-xl
font-bold
mt-5
">

{item.title}

</h3>


<p className="
text-gray-500
mt-3
">

{item.text}

</p>


</div>

))

}


</section>

)

}


export default FeatureCards;