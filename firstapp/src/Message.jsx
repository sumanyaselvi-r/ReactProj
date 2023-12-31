function MessageCard({details}){
    return<>
      
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{details.packname}</h5>
            <h6 class="card-price text-center">${details.price}<span class="period">/month</span></h6>
            <p>_________________________________________________________</p>
           
           
            <ul class="fa-ul">
            {
            details.features.map((feature)=>{
              return<li className={feature.enable ?"fw-bold":"text-body-secondary"}>{feature.name}</li>
            })
            }
          
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
        
        
    
      

      
     </>
}
export default MessageCard;