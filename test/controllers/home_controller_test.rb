require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest

  test "should get root" do
    get root_path
    assert_response :success
  end

  test "should get dashboard" do
    get dashboard_path
    assert_response :success
  end
end
