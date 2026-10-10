const questions=[
"How does AI launcher work?",
"Can I manage multiple accounts?",
"Is there a free plan?"
]


export default function FAQ(){


return(

<section className="
max-w-3xl mx-auto
py-20
px-6
">


<h2 className="
text-4xl
font-bold
">

Frequently Asked Questions

</h2>


{
questions.map(q=>(

<div
className="
bg-white
rounded-xl
p-5
mt-4
"
>

{q}

</div>

))
}


</section>

)

}