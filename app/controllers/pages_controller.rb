class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def dashboard
    @recordings = Recording.where(speaker: current_user)
  end

  def stats

  end

  def library

  end
end
