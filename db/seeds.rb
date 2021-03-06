100.times do
  Invoice.create(
    amount: Faker::Number.between(50_000, 100_000),
    company: Faker::Company.name,
    contragent: Faker::Company.name,
    currency: 'USD',
    date: Faker::Date.between(1.year.ago, Date.today),
    created_at: DateTime.now,
    updated_at: DateTime.now
  )
end
