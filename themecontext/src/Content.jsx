import React, { useContext, useState } from 'react'
import { Themecontext } from './context/ThemeContext'


const Content = () => {
    const {flag,handleToggleTheme}=useContext(Themecontext)
  return (
   
    <div>   
        <div className="main" style={{
            backgroundColor: flag?"black":"white" ,
            color:  flag?"white":"black",
            width:"60%",
            textAlign:"left",
            marginTop:"20px",
            marginLeft:"270px",
            height:"700px",
            padding:"10px"}}>
            <h2>Card</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eum consequuntur eaque magni nam recusandae libero, obcaecati quae officia voluptatibus illo laudantium labore modi, optio alias voluptate rerum vero consectetur.
            Nemo qui, itaque reprehenderit aspernatur aut corrupti? Ipsum reprehenderit temporibus asperiores numquam dolore animi reiciendis aperiam dolor voluptatem, optio sapiente fugiat dolorum doloremque. Quo, facere sit ducimus distinctio enim minus.
            Fugiat, omnis vitae recusandae ut magnam nemo numquam esse totam quas animi iste aliquid accusantium expedita? Temporibus, nesciunt! Quia a blanditiis deserunt quae voluptatem eos. Aliquid nemo accusamus itaque explicabo!
            Enim quasi, expedita assumenda consequatur autem consequuntur asperiores accusamus sed vero eaque iure nobis in error numquam nulla excepturi voluptates esse tenetur quis tempora? Nam tenetur ullam sapiente delectus odio?
            Perspiciatis, perferendis! Unde ullam suscipit sed! Aliquam necessitatibus delectus sequi sunt fugiat earum aliquid deserunt voluptatum molestiae omnis iusto perferendis ducimus distinctio illum sit doloribus magnam, animi, reprehenderit culpa repellat!
            Aliquam perferendis aperiam exercitationem quaerat labore temporibus numquam adipisci corrupti non quod assumenda neque hic ipsa, necessitatibus dolore fugiat saepe officia eum sequi sint magni expedita voluptatem dolor sed? Asperiores!
            Earum quos, nobis alias sit iste, culpa dignissimos temporibus impedit, animi aliquid quod ab provident. Facilis atque nemo fugit voluptatum ea eius quas. Magni vel omnis, rerum modi pariatur corrupti.
            Doloribus reiciendis, debitis vel nisi repellendus sequi ipsum at impedit soluta sapiente laudantium facere nulla non officia inventore fuga distinctio, architecto recusandae tempora cupiditate, minima laborum? Suscipit voluptate sequi autem?
            Laborum mollitia, quas eum reprehenderit labore modi neque sunt nostrum ab, sapiente unde porro quasi impedit repellendus ullam ut non eius, dolorum quis veritatis quaerat adipisci. Numquam in doloribus fuga.
            Rerum ex nesciunt adipisci sapiente fugiat quasi consectetur inventore id tenetur possimus? Dolor minima, iure animi inventore vel dolorum provident laborum. Illum unde perspiciatis voluptates, dolor assumenda reiciendis magni doloribus?
            Consequuntur, excepturi doloribus temporibus delectus atque adipisci repellat totam minima illo deleniti veritatis repellendus architecto perspiciatis at! Reiciendis est, tenetur distinctio, sequi magni optio natus consequatur sunt amet, reprehenderit porro!
            Facere ullam inventore, enim velit architecto sed impedit fugit assumenda saepe vero pariatur sit dolorum modi vitae recusandae autem libero dolor totam neque sapiente fuga alias. Dolores libero tempore accusantium.
            In, mollitia culpa nemo excepturi dolore vero maiores perferendis repellendus corrupti libero accusamus ratione praesentium assumenda. Quo sit natus mollitia officiis aliquid libero sapiente, illum deserunt veritatis hic debitis nisi.
            Aspernatur qui culpa quas unde esse dignissimos debitis, expedita officiis doloribus modi nisi saepe ea reiciendis tenetur at non fugit possimus veniam soluta ducimus nulla commodi rerum ipsum perferendis. Libero.
            Optio sequi necessitatibus ducimus labore deserunt ipsum velit nemo at, neque aut iste aliquam sapiente nulla. Soluta reprehenderit natus eius, a sunt quidem molestias laborum placeat aliquam alias hic ea.
            Eaque nobis culpa rem minus nulla modi cumque animi est fugiat cum! Corrupti magni obcaecati perferendis nisi veritatis culpa laborum autem dolore! Sequi eaque, ullam itaque modi quam cupiditate optio?
            Consequatur placeat cupiditate quasi aut fuga id enim vitae quia soluta, iure voluptatem eos minus nostrum nisi est fugit rerum suscipit? Assumenda doloremque quod eveniet deleniti unde delectus, perferendis facilis?
            Reprehenderit expedita repellat at vero, tempora deserunt ipsa perspiciatis iure corrupti eaque iusto, ullam, magnam deleniti commodi nihil. Placeat debitis iste inventore beatae reiciendis, quis reprehenderit eligendi deserunt nam corrupti!
            Nulla dicta vitae, dolores officia qui accusantium eum atque maiores sint in perferendis explicabo dolore sapiente rem deleniti aut fuga. Voluptates laborum soluta repudiandae inventore ad eius qui aspernatur quisquam.
            Accusamus doloribus molestiae adipisci at qui amet officiis voluptatibus hic sequi officia nisi fugit dolores repudiandae labore magnam aut cupiditate reiciendis commodi assumenda nam, nobis sit dicta debitis. Molestias, fugiat?
            Debitis dolore doloribus laborum rerum iure fugiat libero ea, aut nisi dolor doloremque, beatae in a velit obcaecati! Error aliquid ad in placeat similique obcaecati quod iusto vero laudantium non?
            Nesciunt eaque temporibus itaque, illo quis voluptas excepturi, obcaecati in maiores facilis aut dolorum officia rerum magni adipisci</p>
            
        </div>
        
    </div>
  )
}

export default Content