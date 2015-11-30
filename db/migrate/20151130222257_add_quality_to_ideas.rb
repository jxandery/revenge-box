class AddQualityToIdeas < ActiveRecord::Migration
  def change
    add_column :ideas, :quality, :string, :default => 'swill'
  end
end
