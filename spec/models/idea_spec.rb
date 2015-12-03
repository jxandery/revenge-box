require 'rails_helper'

RSpec.describe Idea, type: :model do
  context "with attributes" do
    let(:idea) {Idea.create(title: "idea 1",
                            body: "i hope i am not at this all night")
    }

    it "is valid" do
      expect(idea).to be_valid
    end

    it "is invalid without title" do
      idea.title = nil

      expect(idea).to_not be_valid
    end

    it "is invalid without body" do
      idea.body = nil

      expect(idea).to_not be_valid
    end

    it "has a default quality of swill" do
      expect(idea.quality).to eq('swill')
    end
  end
end
