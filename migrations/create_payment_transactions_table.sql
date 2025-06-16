-- Create payment_transactions table
CREATE TABLE IF NOT EXISTS payment_transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  reference TEXT UNIQUE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  plan_id TEXT,
  plan_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  payment_date TIMESTAMP WITH TIME ZONE,
  gateway_response TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add new columns to users table for Paystack
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS paystack_customer_id TEXT,
ADD COLUMN IF NOT EXISTS paystack_plan_code TEXT,
ADD COLUMN IF NOT EXISTS paystack_subscription_code TEXT,
ADD COLUMN IF NOT EXISTS subscription_end_date TIMESTAMP WITH TIME ZONE;

-- Create RLS policies for payment_transactions
ALTER TABLE payment_transactions ENABLE ROW LEVEL SECURITY;

-- Users can only see their own payment transactions
CREATE POLICY "Users can view their own payment transactions" ON payment_transactions
  FOR SELECT USING (auth.uid() = user_id);

-- Only allow inserts from server (no RLS for insert)
CREATE POLICY "Only server can insert payment transactions" ON payment_transactions
  FOR INSERT WITH CHECK (false);

-- Only allow updates from server (no RLS for update)
CREATE POLICY "Only server can update payment transactions" ON payment_transactions
  FOR UPDATE USING (false);
