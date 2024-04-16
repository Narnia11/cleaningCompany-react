
export default function Footer(){
    return(<>
      <footer>
        <div className="footer container">
          <div className="footerTop">
            <div className="footerTop__one">
              <div className="footerTop__one--title footer_title">Social Medier</div>
              <div className="footerTop__one--content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus sunt minima alias deleniti?
                </p>
              </div>
              <div className="footerTop__one--icons">
                <i className="bi bi-facebook"><a href="#" title="facebook page"></a></i>
                <i className="bi bi-instagram"><a href="#" title="instagram page"></a></i>
                <i className="bi bi-twitter"><a href="#" title="twiter page"></a></i>
              </div>
            </div>
            <div className="footerTop__two">
              <div className="footerTop__two--title footer_title">
                Kontakt Uppgifter
              </div>
              <div className="footerTop__two--content">
                <div><i className="bi bi-geo-alt-fill"></i>Storgatan 34</div>
                <div><i className="bi bi-envelope-fill"></i>städfint@gmail.com</div>
                <div><i className="bi bi-telephone-inbound-fill"></i>+46 45623</div>
                <div>
                  <i className="bi bi-clock"></i>Vardagar från kl. 00:08 - 00:18
                </div>
              </div>
            </div>
            <div className="footerTop__three">
              <div className="footerTop__three--title footer_title">
                Våra Tjänster
              </div>
              <p>Basic Städning</p>
              <p>Topp Städning</p>
              <p>Diamant Städning</p>
              <p>Fönster Tvätt</p>
            </div>
            <div className="footerTop__four">
              <div className="footerTop__four--title footer_title">
                Lämna Kommentar
              </div>
              <form action="">
                <input type="text" name="myname" id="myname" placeholder="Name" />
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Skriv gärna din kommentar"
                ></textarea>
                <input type="submit" value="Skicka" className="green-btn form-btn" />
              </form>
            </div>
          </div>
          <div className="footerBottom">
            <div className="footerBottom__text">
              <p className="label">Lorem ipsum.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                voluptatum!
              </p>
            </div>
            <div className="footerBottom__btn">
              <button className="green-btn"><a href="#boka" title="bookning page">bokning</a></button>
              <button className="white-btn"><a href="../Login/login.html" title="login och register page">Logga in/Registera</a> </button>
            </div>
          </div>
        </div>
      </footer>
    </>)
}