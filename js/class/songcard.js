export default class SongCard {
    constructor(_parent,_item,id) {
        this.parent = _parent;
        this.albumsTitle = _item.name;
        this.artist = _item.artists[0].name;
        this.image = _item.images[0].url;
        this.rDate = _item.release_date;
        this.traks = _item.total_tracks;
        this.external= _item.external_urls.spotify;
        this.id = "album"+id;
        this.albumId = _item.id
    }

    render(){
        let newDiv = document.createElement("div");
        newDiv.className="d-flex justify-content-center"
        document.querySelector(this.parent).append(newDiv)

        newDiv.innerHTML= 
        `
      
        <div class="card col mt-3 mb-3 songCard p-2 shadow-lg bg-secondary" style="width: 18rem;">
          <a href="#" type="button" class="" data-bs-toggle="modal" data-bs-target="#${this.id}"><img
              src=${this.image} class="card-img-top" alt="${this.albumsTitle}"></a>
          <div class="card-body">
            <h4 class="card-title album-title"><span class="text-light">${this.albumsTitle}<span/></h4>
            <p class="fs-5 text-light">${this.artist}</p>
            <p class="card-text text-light">
              date of creation : ${this.rDate}
              <br>
              <br>
              Traks: ${this.traks}
            </p>
            <a href="${this.external}" class="btn btn-info ">view artist in spotify </a>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade modal-md" id="${this.id}" data-bs-backdrop="static" data-bs-keyboard="false"
          tabindex="-1" aria-labelledby="" Label" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="">${this.albumsTitle}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/${this.albumId}?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
              <div class="modal-footer">

                <a  href=${this.external} type="button" class="btn btn-info">visit on spotify</a>
              </div>
            </div>
          </div>
        </div>

      

        `
    }
}