export default function Job(){
    return(<>
     <section>
        <div className="sectionFour"></div>
        <div className="sectionFour__box grid container">
          <div className="sectionFour__boxLeft">
            <div className="sectionFour__boxLeft--title common-title">
              Vill du jobba hos oss?
            </div>
            <div className="sectionFour__boxLeft--text text-dark">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="sectionFour__boxRight">
            <form action="" method="get" className="flex">
              <label htmlFor="name1">Namn*</label>
              <input type="text" id="name1"  name="name1"/>
              
              <label htmlFor="email-adress">Mejl*</label>
              <input type="email" id="email-adress"  name="email-adress"/>

              <input type="submit" className="sectionFour__boxRight--btn dark-btn" value="Go vidare "/>
            </form>
          </div>
        </div>
        <div className="sectionFour"></div>
      </section>
    </>)
}