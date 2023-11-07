

import './App.css';
import Message from './Message';




function App() {
  const PlanDetails=[{
    packname:"Free",
    price:"0",
    features:[{
      name:"Single User",
      enable:true,
    },
    {
      name:"5GB storage",
      enable:true,


    },
    {
      name:"Unlimited Public Projects",
      enable:true,
    },
    {
      name:"Community Access",
      enable:true,
    },
    {
      name:"Unlimited Private Projects",
      enable:false
    },
    {
      name:"Dedicated Phone Support",
      enable:false

    },
  {
    name:"Free Subdomain",
    enable:false
  },
  {
    name:"Monthly Status Reports",
    enable:false

  }  ]
  
  },
  {
    packname:"Plus",
    price:"9",
    features:[{
      name:"5 Users",
      enable:true,
    },
    {
      name:"50GB storage",
      enable:true,

    },
    {
      name:"Unlimited Public Projects",
      enable:true,
    },
    {
      name:"Community Access",
      enable:true,
    },
    {
      name:"Unlimited Private Projects",
      enable:true,
    },
    {
      name:"Dedicated Phone Support",
      enable:true,

    },
  {
    name:"Free Subdomain",
    enable:false,
  },
  {
    name:"Monthly Status Reports",
    enable:false,

  }  ]
   
  },
  {
    packname:"Pro",
    price:"49",
    features:[{
      name:"Unlimited User",
      enable:true,
    },
    {
      name:"150GB storage",
      enable:true,

    },
    {
      name:"Unlimited Public Projects",
      enable:true,
    },
    {
      name:"Community Access",
      enable:true,
    },
    {
      name:"Unlimited Private Projects",
      enable:true,
    },
    {
      enable:true,
      name:"Dedicated Phone Support",

    },
  {
    name:"Free Subdomain",
    enable:true,
  },
  {
    name:"Monthly Status Reports",
    enable:true,

  }  ]

   
  }]
 return <section class="pricing py-5">
 <div class="container">
   <div class="row">
 {
  
    PlanDetails.map((detail) => (
            <Message details={detail} />
          ))
 }
 </div>
 </div>
 </section>
 
   
}

export default App;
