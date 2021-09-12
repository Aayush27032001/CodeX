import React from 'react'
import '../CSS/InfoBlog.css'


export default function InfoBlog() {
    return (

        <div className='blog-info-container'>

            <h1 className="blog-title">Blog Topic 1</h1>
            <p>Posted on --Date--, By Aayush Vishwakarma</p>

            <div className='info-blog-body'>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore vel voluptatibus tempore culpa eius quos velit nisi eaque
                    repellat expedita quam, perspiciatis voluptatum consequatur sit iusto
                    facere? Dignissimos illum recusandae eaque eum, cumque dolorum nulla nostrum
                    ratione temporibus doloremque nemo saepe. Culpa illo sed voluptatibus harum quam
                    explicabo sequi rerum sit iste quo facilis accusamus eveniet assumenda cum
                    dolorem, omnis similique corrupti eius magnam. Neque aperiam tenetur modi
                    possimus enim incidunt nihil suscipit vitae. Doloremque magni temporibus
                    blanditiis expedita voluptas numquam cum soluta sequi voluptates suscipit
                    nemo corrupti architecto libero, quaerat placeat modi eum magnam omnis eius.
                    Quod aut magni officia non quae ab dolor perferendis molestias. Veritatis
                    doloremque quibusdam repellat esse quam unde commodi corporis praesentium nisi,
                    nulla laborum molestias dignissimos sit magni et modi dolore fuga quod obcaecati.
                    Veritatis nobis aut molestias nesciunt deserunt. Corporis ad id, doloribus quibusdam
                    repellendus ex exercitationem, tempore tenetur, obcaecati voluptates animi? Ad,
                    odit iusto vel deleniti alias porro asperiores pariatur voluptates perspiciatis
                    recusandae quam quasi reiciendis necessitatibus provident! Eos explicabo dolor, maiores
                    voluptatibus quo totam molestiae eaque ullam quas? Magnam maxime iusto dolor similique
                    aliquam suscipit laborum vero autem placeat, explicabo quos nemo architecto inventore
                    ullam voluptates vel totam facilis nesciunt repellat? Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Harum, fugiat delectus! Optio debitis, distinctio voluptatem voluptas quia
                    nemo cum ipsum dolorem, fugit quas hic tempora doloremque possimus quasi ipsa numquam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, fugiat nesciunt.
                    Distinctio saepe quidem eaque voluptate doloremque possimus omnis tempore asperiores e
                    xplicabo corrupti aperiam ipsa nobis doloribus sapiente quas, perspiciatis nihil nesciunt
                    deserunt, quae aspernatur! Ex explicabo ad aut quidem libero illo eveniet, quod, voluptates
                    xpedita exercitationem numquam quia iste praesentium debitis, error accusantium sunt volu
                    ptate corrupti soluta consectetur maxime. Minus ad et amet maxime asperiores aperiam non d
                    eleniti nisi, illo rem, eum facilis autem veniam, eligendi in dolores inventore quae liber
                    o aliquam! Quaerat laudantium minima esse veniam at asperiores quasi eum perferendis quisq
                    uam aliquid quas doloremque quam, dolor illo eius odio, nesciunt maiores repellendus offic
                    ia, cupiditate aut exercitationem reprehenderit. Doloremque, exercitationem voluptate expe
                    dita incidunt esse iusto quisquam voluptas earum veniam laudantium iure, cupiditate natus
                    voluptatem asperiores tempore recusandae dolore? Quasi, laudantium. Iusto aliquid sapiente
                    eveniet similique voluptates ullam nemo reprehenderit fuga odit beatae modi nobis doloremque
                    esse, suscipit laboriosam eos explicabo, cupiditate rerum possimus molestiae dolorem voluptatibus
                    labore sequi! Perspiciatis quibusdam, aspernatur doloremque deserunt vel pariatur. Officia
                    tempora accusamus quam dignissimos, cupiditate ducimus hic non, enim rerum tenetur illum.
                    Similique doloribus quas dolor inventore fuga fugiat adipisci illo placeat atque laudantium
                    quis ab suscipit odit, eius molestias.
                </p>
                <div className="blog-slider">
                    <button className='blog-slider slider-prev'>
                        <i class="fas fa-arrow-circle-left fa-2x"></i>
                    </button>
                    <button className='blog-slider slider-next'>
                        <i class="fas fa-arrow-circle-right fa-2x"></i>
                    </button>
                </div>

            </div>

            <hr />
            <h2>Leave a Comment</h2>

            <form className="comment-form">
                <input
                    className="comment-input"
                    type="text"
                    name=""
                    placeholder="Add Public Comment"
                />
                <button
                    className="comment-submit" type="submit">Submit</button>
            </form>

            <h2>Comments:</h2>
            <div className="comment-area">
                <div>
                    <p>Aayush Vishwakarma</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempora ex fugit ducimus porro, est consequuntur dignissimos vel recusandae eligendi, repudiandae amet iste et sit laboriosam? Nemo ex sit labore nesciunt velit voluptatem ducimus molestiae ipsam eaque suscipit enim dolorum dolorem, amet, saepe minus autem! Reprehenderit perspiciatis ad consequatur saepe.</p>
                </div>

                <div>
                    <p>Nilesh Yadav</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempora ex fugit ducimus porro, est consequuntur dignissimos vel recusandae eligendi, repudiandae amet iste et sit laboriosam? Nemo ex sit labore nesciunt velit voluptatem ducimus molestiae ipsam eaque suscipit enim dolorum dolorem, amet, saepe minus autem! Reprehenderit perspiciatis ad consequatur saepe.</p>
                </div>
            </div>

        </div>

    )
}
