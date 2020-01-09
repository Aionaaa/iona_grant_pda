require( 'minitest/autorun' )
require_relative( '../card_game' )
require_relative( '../card' )

class TestCardGame < MiniTest::Test

def setup

    @card1 = Card.new("clubs", 1)
    @card2 = Card.new("spades", 2)

end

def test_card_has_suit()
  result = @card1.suit
  assert_equal(result, "clubs")
end

def test_card_has_value()
  result = @card2.value
  assert_equal(result, 2)
end

def test_card_is_ace()
  result = CardGame.check_for_ace(@card1)
  assert_equal(result, true)
end

def test_card_is_not_ace()
  result = CardGame.check_for_ace(@card2)
  assert_equal(result, false)
end

def test_highest_card_wins()
  result = CardGame.highest_card(@card1, @card2)
  assert_equal(result, @card2)
end

def test_total()
  cards = [@card1, @card2]
  result = CardGame.cards_total(cards)
  assert_equal(result, "You have a total of 3")
end

end
