class Api::V1::IdeasController < ApplicationController
  respond_to :html, :json, :xml
  #default api/v1/ideas with a json payload

  def index
    respond_with Idea.all
  end
end
