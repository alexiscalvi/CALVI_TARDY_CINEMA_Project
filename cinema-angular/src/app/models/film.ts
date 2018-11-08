export class Film {
  constructor(
    public filmId?,
    public title?: String,
    public description?: String,
    public release_year?: String,
    public language_id?: String,
    public original_language_id?: String,
    public rental_duration?: String,
    public rental_rate?: String,
    public length?: String,
    public replacement_cost?: String,
    public rating?: String,
    public special_features?: String,
    public last_update?: String
  ) {
  }
}
