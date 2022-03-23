export const Profile = () => {
    const containerProfile = `<header>
                             <nav>
                              <ul>
                               <li><i id="Homeicon" class="fa fa-home"> </i></li>
                               <li><i id="Usericon" class="fa fa-user" > </i></li>
                               <li><i id="Bellicon" class="fa fa-bell" > </i></li>
                               <li><i id="logOut" class="fa fa-power-off"></i></li>
                              </ul>
                             </nav>
                            </header>
                            <div id="profileInfo">PERFIL</div>
                            <form id="createPost">
                             <input id="title" placeholder="Titulo">
                             <textarea id="post" placeholder="Descripcion"></textarea>
                             <button id="postButton">Publicar</button>
                            </form>
                            <div id="postsContainer"></div>`;
  return containerProfile;
};
