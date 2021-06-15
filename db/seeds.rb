# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ChannelMembership.delete_all
User.delete_all
Channel.delete_all
Message.delete_all

u1 = User.create!(email: 'J Cole', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u1 = User.create!(email: 'Jay Z', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u3 = User.create!(email: 'Kanye', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u4 = User.create!(email: 'Drake', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u5 = User.create!(email: '6lack', password: 'starwars', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u6 = User.create!(email: 'Pop Smoke', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u7 = User.create!(email: 'Linkin Park', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u8 = User.create!(email: 'Olivia Rodrigo', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u9 = User.create!(email: 'Coldplay', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u10 = User.create!(email: 'Alicia Keys', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u11 = User.create!(email: 'Bad Bunny', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u12 = User.create!(email: 'Beyonce', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021',  online_status: true)

u13 = User.create!(email: 'Billy Ocean', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u14 = User.create!(email: 'Billy Joel', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u15 = User.create!(email: 'Bon Jovi', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

u16 = User.create!(email: 'Boyz II Men', password: 'password', created_at: '1/1/2021', updated_at: '1/1/2021', online_status: false)

c1 = Channel.create!(title: 'General',channel_type: 'public',channel_or_dm: 'channel',created_at: '1/1/2021',updated_at: '1/1/2021',description: 'Just chattin\ about whatever')
        
c2 = Channel.create!(title: 'Collabs',channel_type: 'public',channel_or_dm: 'channel',created_at: '1/1/2021',updated_at: '1/1/2021',description: 'Horses and the amusement to be gained thereby')

c3 = Channel.create!(title: 'Record Deals',channel_type: 'public',channel_or_dm: 'channel',created_at: '1/1/2021',updated_at: '1/1/2021',description: 'Bideo games')

c4 = Channel.create!(title: 'Octoberfest',channel_type: 'public',channel_or_dm: 'channel',created_at: '1/1/2021',updated_at: '1/1/2021',description: 'We talk about Star Wars here.')

c5 = Channel.create!(title: 'Coachella',channel_type: 'public',channel_or_dm: 'channel',created_at: '1/1/2021',updated_at: '1/1/2021',description: 'We talk about Star Trek here.')

c6 = Channel.create!(title: 'Jay, Beyonce', channel_type: 'private', channel_or_dm: 'dm', created_at: '1/1/2021',updated_at: '1/1/2021',description: '')

c7 = Channel.create!(title: 'Kanye, Bon Jovi', channel_type: 'private', channel_or_dm: 'dm', created_at: '1/1/2021',updated_at: '1/1/2021',description: '')

c8 = Channel.create!(title: 'J Cole, Boyz II Men', channel_type: 'private', channel_or_dm: 'dm', created_at: '1/1/2021',updated_at: '1/1/2021',description: '')

c9 = Channel.create!(title: 'Drake, Bad Bunny',channel_type: 'private',channel_or_dm: 'dm',created_at: '1/1/2021',updated_at: '1/1/2021',description: '')

cm1 = ChannelMembership.create!(user_id: User.first.id,channel_id: Channel.first.id,created_at: '1/1/2021',updated_at: '1/1/2021')

cm2 = ChannelMembership.create!(user_id: User.first.id,channel_id: Channel.second.id,created_at: '1/1/2021',updated_at: '1/1/2021')

cm3 = ChannelMembership.create!(user_id: User.first.id,channel_id: Channel.third.id,created_at: '1/1/2021',updated_at: '1/1/2021')

cm4 = ChannelMembership.create!(user_id: User.first.id,  channel_id: Channel.fourth.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm5 = ChannelMembership.create!(user_id: User.first.id,  channel_id: Channel.fifth.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm6 = ChannelMembership.create!(user_id: User.second.id,  channel_id: Channel.first.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm7 = ChannelMembership.create!(user_id: User.second.id,  channel_id: Channel.second.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm8 = ChannelMembership.create!(user_id: User.second.id,  channel_id: Channel.third.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm9 = ChannelMembership.create!(user_id: User.second.id,  channel_id: Channel.fourth.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm10 = ChannelMembership.create!(user_id: User.second.id, channel_id: Channel.fifth.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm11 = ChannelMembership.create!(user_id: User.third.id, channel_id: Channel.first.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm12 = ChannelMembership.create!(user_id: User.third.id, channel_id: Channel.second.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm13 = ChannelMembership.create!(user_id: User.third.id, channel_id: Channel.third.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm14 = ChannelMembership.create!(user_id: User.third.id, channel_id: Channel.fourth.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm15 = ChannelMembership.create!(user_id: User.third.id, channel_id: Channel.fifth.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm16 = ChannelMembership.create!(user_id: User.fourth.id, channel_id: Channel.first.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm17 = ChannelMembership.create!(user_id: User.fourth.id, channel_id: Channel.second.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm18 = ChannelMembership.create!(user_id: User.fourth.id, channel_id: Channel.third.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm19 = ChannelMembership.create!(user_id: User.fourth.id, channel_id: Channel.fourth.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm20 = ChannelMembership.create!(user_id: User.fourth.id, channel_id: Channel.fifth.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm21 = ChannelMembership.create!(user_id: User.fifth.id, channel_id: Channel.first.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm22 = ChannelMembership.create!(user_id: User.fifth.id, channel_id: Channel.second.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm23 = ChannelMembership.create!(user_id: User.fifth.id, channel_id: Channel.third.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm24 = ChannelMembership.create!(user_id: User.fifth.id, channel_id: Channel.fourth.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm25 = ChannelMembership.create!(user_id: User.fifth.id, channel_id: Channel.fifth.id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm26 = ChannelMembership.create!(user_id: User.first.id, channel_id: Channel.find_by(title: 'Jay, Beyonce').id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm27 = ChannelMembership.create!(user_id: User.fifth.id, channel_id: Channel.find_by(title: 'Jay, Beyonce').id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm28 = ChannelMembership.create!(user_id: User.second.id, channel_id: Channel.find_by(title: 'Kanye, Bon Jovi').id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm29 = ChannelMembership.create!(user_id: User.fifth.id, channel_id: Channel.find_by(title: 'Kanye, Bon Jovi').id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm30 = ChannelMembership.create!(user_id: User.third.id, channel_id: Channel.find_by(title: 'J Cole, Boyz II Men').id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm31 = ChannelMembership.create!(user_id: User.fifth.id, channel_id: Channel.find_by(title: 'J Cole, Boyz II Men').id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm32 = ChannelMembership.create!(user_id: User.fourth.id, channel_id: Channel.find_by(title: 'Drake, Bad Bunny').id, created_at: '1/1/2021', updated_at: '1/1/2021')

cm33 = ChannelMembership.create!(user_id: User.fifth.id, channel_id: Channel.find_by(title: 'Drake, Bad Bunny').id, created_at: '1/1/2021', updated_at: '1/1/2021')

m1 = Message.create!(user_id: User.first.id,channel_id: Channel.first.id,body: 'Whats going on in here?',created_at: '1/1/2021',updated_at: '1/1/2021')

m2 = Message.create!(user_id: User.second.id,channel_id: Channel.first.id,body: 'Not much.',created_at: '1/1/2021',updated_at: '1/1/2021')

m3 = Message.create!(user_id: User.third.id,channel_id: Channel.second.id,body: 'I like horses.',created_at: '1/1/2021',updated_at: '1/1/2021')