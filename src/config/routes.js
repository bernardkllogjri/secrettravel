export default [
    {path:'/channels',view:'Channels',exact:true},
    {path:'/',view:'Home',exact:true},
    {path:'/deals/:id',view:'Deals',exact:true},
    {path:'/deals/:id/*',view:'Deals',exact:true},
    {path:'/deal/:id',view:'Deal',exact:true},
    {path:'/channels/*',view:'Channels',exact:false},
]