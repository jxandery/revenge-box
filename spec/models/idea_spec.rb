require 'rails_helper'

RSpec.describe Idea, type: :model do
  context "with attributes" do
    let(:idea) {Idea.create(title: "idea 1",
                            body: "i hope i am not at this all night",
                            quality: "swill")
    }
    it "is valid" do
      expect(idea).to be_valid
    end

  end
end
