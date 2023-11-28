class MoviesController < ApplicationController
  def index
    @movies = Movie.order(year: :desc, title: :asc)

    if params[:query].present?
      @movies = @movies.where("title ILIKE ?", "%#{params[:query]}%")
    end

    respond_to do |format|
      format.html
      format.text { render partial: "movies/list", locals: {movies: @movies}, formats: [:html] }
    end
  end

  def update
    @movie = Movie.find(params[:id])
    @movie.update(movie_params)
    redirect_to movies_path
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year)
  end
end
