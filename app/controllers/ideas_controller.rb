class IdeasController < ApplicationController
  respond_to :html, :json, :xml

  def index
    respond_with Idea.all
  end

  def create
    respond_with Idea.create!(idea_params)
  end

  def update
    idea = Idea.find(params[:id])
    idea.update!(idea_params)
    render json: idea.to_json, status: :ok
  end

  def destroy
    Idea.find(params[:id]).destroy
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :status)
  end
end
