require 'rails_helper'

RSpec.describe 'add idea' do
  context 'with valid attributes' do

    it "adds an idea" do
      visit ideas_path

      fill_in "Title", with: "Brilliant Idea"
      fill_in "Body", with: "Needs more work"
      click_button "Save Idea"

      expect(page).to have_content("Brilliant Idea")
      expect(page).to have_content("Needs more work")
      expect(current_path).to eq(ideas_path)
    end
  end
end
