require 'test_helper'

class RessourcesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ressources_index_url
    assert_response :success
  end

end
