import { observable, computed, reaction } from 'mobx';
import axios from "axios";
import _ from "underscore";
import moment from "moment";

class GallaryImageFbStore {
    constructor() {

    }
    allPhotos = {};
    albums = {};
    nextPagingAlbumUrl = "";
    @observable allImages = [];
    pastEvents = {};
    upcomingEvents = {};


    fetchImage(urlFbImages = "https://graph.facebook.com/v2.9/Lakshya.changinglives?fields=albums{photos{images}}&access_token=147132012148263|wVRNpp3XrLPZu1-Krw8M72og_rY") {
        let self = this;
        axios.get(urlFbImages)
            .then(function (response) {
                self.nextPagingAlbumUrl = response.data.albums.paging.next;
                Object.assign(self.albums, response.data.albums);

                self.prepareImagesSources();
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    prepareImagesSources() {
        let self = this;
        _.each(self.albums.data, (album, i) => {
            self.allPhotos[i] = album.photos.data;
        });
        const allImagesSrc = [];
        _.each(self.allPhotos, (photos, i) => {
            _.each(photos, (photo, k) => {
                allImagesSrc.push({ id: photo.id, imgDetails: photo.images[0] });
            });
        });
        self.allImages = allImagesSrc;
    }



}

const gallaryImageFbStore = new GallaryImageFbStore();

export default gallaryImageFbStore;