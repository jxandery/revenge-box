class IdeasController < ApplicationController
  respond_to :html, :json, :xml

  def index
    respond_with Idea.all
  end

  def create
    respond_with Idea.create(title: params[:idea][:title],
                body: params[:idea][:body])
  end

  def destroy
    Idea.find(params[:id]).destroy
  end
end
