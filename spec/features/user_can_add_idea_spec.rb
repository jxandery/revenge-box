require 'rails_helper'

RSpec.describe 'add idea' do
  context 'with valid attributes' do

    it "adds an idea" do
      visit ideas_path

      fill_in "post-description", with: 'Brillant Idea'
      fill_in "post-body", with: "Needs more work"
      click_button "Save Idea"
      save_and_open_page

      expect(current_path).to eq(ideas_path)
    end
  end
end
