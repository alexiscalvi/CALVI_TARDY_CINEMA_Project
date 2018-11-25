export class Film {
  constructor(
    public filmId?,
    public title?: String,
    public description?: String,
    public releaseYear?: String,
    public languageId? ,
    public originalLanguageId?: String,
    public rentalDuration?: String,
    public rentalRate?: String,
    public length?,
    public replacementCost?: String,
    public rating?: String,
    public specialFeatures?: String,
    public lastUpdate?: String
  ) {
  }
}
