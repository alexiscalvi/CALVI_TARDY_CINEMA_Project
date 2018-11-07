export class Film {
  constructor(
    public film_id?,
    public title?: string,
    public description?: string,
    public release_year?: string,
    public language_id?: string,
    public original_language_id?: string,
    public rental_duration?: string,
    public rental_rate?: string,
    public length?: string,
    public replacement_cost?: string,
    public rating?: string,
    public special_features?: string,
    public last_update?: string
  ) {
  }
}
